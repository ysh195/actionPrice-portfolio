package com.example.actionprice.user.favorite;

import com.example.actionprice.exception.TooManyFavoritesException;
import com.example.actionprice.exception.UserNotFoundException;
import com.example.actionprice.user.User;
import com.example.actionprice.user.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 즐겨찾기 항목 서비스
 * @author 연상훈
 * @created 2024-11-08 오후 2:30
 */
@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class FavoriteServiceImpl implements FavoriteService {

  private final FavoriteRepository favoriteRepository;
  private final UserRepository userRepository;

  private final int maxFavoriteSize = 10;

  /**
   * 즐겨찾기 생성 메서드
   * @author 연상훈
   * @created 2024-11-08 오후 2:35
   * @info 즐겨찾기 항목이 존재하는지는 고려하지 않고 요청 받은 대로 url 구성해서 저장
   */
  @Override
  public FavoriteSimpleDTO createFavorite(
      String large,
      String middle,
      String small,
      String rank,
      String logined_username,
      String favorite_name
  ) {
    User user = userRepository.findById(logined_username)
        .orElseThrow(() -> new UserNotFoundException("user(" +logined_username + ") does not exist"));

    String favoriteUrl = String.format(
            "http://localhost:3000/api/category/%s/%s/%s/%s",
            large,
            middle,
            small,
            rank
    );

    if(user.getFavoriteSet().size() >= maxFavoriteSize) {
      throw new TooManyFavoritesException("max size of favorite : " + maxFavoriteSize);
    }

    Favorite favorite = Favorite.builder()
        .favoriteName(favorite_name)
        .favoriteURL(favoriteUrl)
        .user(user)
        .build();

    // 레포지토리에 저장해야만 id가 발급되고, 그래야 user에 추가 가능
    favorite = favoriteRepository.save(favorite);

    user.addFavorite(favorite);
    userRepository.save(user);

    return FavoriteSimpleDTO.builder()
            .favoriteId(favorite.getFavoriteId())
            .favoriteName(favorite.getFavoriteName())
            .favoriteURL(favorite.getFavoriteURL())
            .favorite_ownerS_username(logined_username)
            .build();
  }
  
  /**
   * 즐겨찾기 삭제 메서드
   * @author 연상훈
   * @created 2024-11-08 오후 2:37
   * @info 내부적으로 인증 진행. 어드민 or 작성자 본인만 삭제 가능
   */
  @Override
  public boolean deleteFavorite(Integer favoriteId, String logined_username, boolean isAdmin) {

    Favorite favorite = favoriteRepository.findById(favoriteId).orElse(null);

    if (favorite == null) {
      return false;
    }

    if (isAdmin || favorite.getUser().getUsername().equals(logined_username)) {
      favoriteRepository.deleteById(favoriteId);

      return true;
    }

    return false;
  }

  /**
   * 마이페이지 등에서 즐겨찾기 목록을 반환하는 메서드
   * @author 연상훈
   * @created 2024-11-08 오후 2:38
   * @info 마이페이지 목록이 보안이 필요한 것도 아니고,
   * 이걸 사용하는 것 자체가 로그인한 사용자 혹은 마이페이지 내부라서 기본적으로 이미 보안이 깔려 있음
   */
  @Override
  public List<FavoriteSimpleDTO> getFavoriteList(String logined_username) {
    List<Favorite> favorites = favoriteRepository.findByUser_Username(logined_username);
    if (favorites.isEmpty() || favorites == null){
      return null;
    }

    return favorites.stream()
        .map(favorite -> FavoriteSimpleDTO.builder()
            .favoriteId(favorite.getFavoriteId())
            .favoriteName(favorite.getFavoriteName())
            .favoriteURL(favorite.getFavoriteURL())
            .favorite_ownerS_username(favorite.getUser().getUsername())
            .build())
        .toList();
  }
}
