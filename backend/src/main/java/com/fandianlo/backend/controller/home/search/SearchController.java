package com.fandianlo.backend.controller.home.search;

import com.fandianlo.backend.mapper.DishesMapper;
import com.fandianlo.backend.pojo.dishes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {
    @Autowired
    DishesMapper dishesMapper;

    @RequestMapping("/search/")
    public List<dishes> getSearchList(@RequestParam String kw) {
        return dishesMapper.getDishesByKeyWords(kw);
    }
}
