package com.fandianlo.backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class notices {
    private Integer notice_id;
    private String title;
    private String poster;
    private String content;
    private Date publish_time;
    private Date revoke_time;
}
