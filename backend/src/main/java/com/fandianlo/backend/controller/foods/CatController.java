package com.fandianlo.backend.controller.foods;

import com.fandianlo.backend.mapper.ShopsMapper;
import com.fandianlo.backend.pojo.shops;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CatController {
    @Autowired
    ShopsMapper shopsMapper;

    @RequestMapping("/cat0/")
    public List<shops> cat0() {
        return shopsMapper.cate0();
    }
    @RequestMapping("/cat1/")
    public List<shops> cat1() {
        return shopsMapper.cate1();
    }
    @RequestMapping("/cat2/")
    public List<shops> cat2() {
        return shopsMapper.cate2();
    }
    @RequestMapping("/cat3/")
    public List<shops> cat3() {
        return shopsMapper.cate3();
    }
    @RequestMapping("/cat4/")
    public List<shops> cat4() {
        return shopsMapper.cate4();
    }
}
