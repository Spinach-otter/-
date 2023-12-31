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
public class feedbacks {
    @TableId(type = IdType.AUTO)
    private Integer feedbacks_id;
    private Integer user_id;
    private String recommend;
    private Date send_time;
    private String reply;
    private Date receive_time;
}
