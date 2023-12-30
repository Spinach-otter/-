package com.fandianlo.backend.controller.home.notices;

import com.fandianlo.backend.mapper.NoticesMapper;
import com.fandianlo.backend.pojo.notices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoticesController {
    @Autowired
    NoticesMapper noticesMapper;

    @RequestMapping("/notices/")
    public List<notices> Notices() {
        return noticesMapper.selectList(null);
    }
}
