package com.fandianlo.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class dishes {
    private Integer dishesId;
    private String dishesName;
    private String dishesPhoto;
    private Double dishesPrice;
    private String dishesIngredient;
    private String dishesNum;
    private String dishesFloor;
    private String dishesShop;
}
