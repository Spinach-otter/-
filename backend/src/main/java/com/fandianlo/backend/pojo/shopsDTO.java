package com.fandianlo.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class shopsDTO {
    private Integer shopId;
    private String shopName;
    private String shopPhoto;
    private List<dishes> topThreeDishes; // 包含前三个菜品的列表
}
