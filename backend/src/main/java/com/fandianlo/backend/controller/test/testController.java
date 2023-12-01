package com.fandianlo.backend.controller.test;

import com.fandianlo.backend.mapper.TestMapper;
import com.fandianlo.backend.pojo.test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class testController {
    @Autowired
    TestMapper testMapper;

    @GetMapping("/test/")
    public List<test> getInfo(){
        return testMapper.selectList(null);
    }
}
