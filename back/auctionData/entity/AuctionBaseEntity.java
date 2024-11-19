package com.example.actionprice.auctionData.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import java.time.LocalDate;

/**
 * 각 DB에 들어갈 엔티티의 베이스 엔티티
 * @author 연상훈
 * @created 2024-11-08 오후 2:46
 * @updated 2024-11-10 오후 9:45 : delDate의 set 메서드 추가
 * @info MappedSuperclass와 SuperBuilder로 엔티티 변환이 자유롭도록 함
 * @info 그래프 객체 때문에 날짜에 대한 delDate의 set 메서드가 반드시 필요
 */
@MappedSuperclass
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class AuctionBaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="del_id")
    private Long delId;

    @Column(name="del_date")
    private LocalDate delDate; //거래일자

    private String large; //대분류

    private String middle; //중분류

    @Column(name = "product_name")
    private String productName; // 상품명

    @Column(name = "product_rank", nullable = true)
    private String productRank; // 등급(상품, 중품)

    @Positive
    private int price; // 가격

    private String market_name; //거래장 이름

    @Column(nullable = true)
    private String del_unit; // 단위(중량 : kg 등)

    public void setDelDate(LocalDate delDate) {
        this.delDate = delDate;
    }
}
