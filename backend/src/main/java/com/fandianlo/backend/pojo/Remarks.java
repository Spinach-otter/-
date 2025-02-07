package com.fandianlo.backend.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Remarks {
    @TableId(type = IdType.AUTO)
    private Integer remarks_id;
    private Integer user_id;
    private Integer dishes_id;
    private String content;
}
