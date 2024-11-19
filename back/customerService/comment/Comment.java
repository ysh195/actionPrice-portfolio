package com.example.actionprice.customerService.comment;

import com.example.actionprice.customerService.BaseEntity;
import com.example.actionprice.user.User;
import com.example.actionprice.customerService.post.Post;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * @author : 연상훈
 * @created : 2024-10-05 오후 10:45
 * @updated : 2024-10-06 오후 12:29
 * @value commentId
 * @value content
 * @value user
 * @value post
 * @info 1. content는 1자 이상, 300자 이하여야 합니다.
 * @info 2. @JsonBackReference와 @ToString(exclude = {"user"})로 순환참조의 위험을 경감시켰습니다.
 * @info 3. createdAt, updatedAt는 BaseEntity를 통해 구현하였습니다.
 * @info 4. 이걸 참조하는 쪽에서 OneToMany로 불러올 때 순번대로 정렬하기 위해 Comparable을 implements 함
 * @info 5. user와 post를 부모 클래스로 가지고 있기 때문에 한쪽 부모에서 comment를 지우면, 다른 부모에서 문제가 생깁니다. 그러한 문제를 해결하기 위해 comment가 삭제되기 전에 comment의 삭제 이벤트를 전파하여 모든 부모에서 지웁니다.
 */
@Entity
@Table(name = "comment")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment extends BaseEntity implements Comparable<Comment> {

  //implements Comparable<Comment> 이것은 set으로 가져올떄 순서를 정함
  // field

  // field - basic
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "commentId")
  private Integer commentId;

  @Column(nullable = false, length = 300)
  private String content;

  // LocalDateTime createdAt | from BaseEntity | auto generation
  // LocalDateTime updatedAt | from BaseEntity | auto generation

  // field - relationship
  @JsonBackReference
  @ManyToOne
  @JoinColumn(name = "username", nullable = true) // 엔티티의 생명 주기상 null인 경우가 발생할 수 있습니다.
  private User user;

  @JsonBackReference
  @ManyToOne
  @JoinColumn(name = "postId", nullable = true)  // 엔티티의 생명 주기상 null인 경우가 발생할 수 있습니다. 그래서 null설정 가능
  private Post post;

  // method
  public void setContent(@Size(min = 1, max = 300) String content) {
    this.content = content;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public void setPost(Post post) {
    this.post = post;
  }

  @Override
  public int compareTo(Comment o) {
    return this.commentId - o.commentId;
  } //최신글인지 판별

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Comment comment = (Comment) o;
    return commentId == comment.commentId;
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(commentId);
  }

}
