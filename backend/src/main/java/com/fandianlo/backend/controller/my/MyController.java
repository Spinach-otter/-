package com.fandianlo.backend.controller.my;

import com.fandianlo.backend.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @Autowired
    UserMapper userMapper;

    @RequestMapping("/like/count")
    public Integer likeCnt(@RequestParam String username) {
        return userMapper.getUserLikesCount(username);
    }

    @RequestMapping("/mark/count/")
    public Integer markCnt(@RequestParam String username) {
        return userMapper.getUserRemarksCount(username);
    }
}
