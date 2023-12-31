package com.fandianlo.backend.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class notice {
    @TableId(type = IdType.AUTO)
    private Integer nid;
    private String title;
    private String poster;
    private String content;
    private Date publish_time;
    private Date revoke_time;
}
