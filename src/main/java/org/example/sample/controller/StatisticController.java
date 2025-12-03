package org.example.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class StatisticController {

    @ModelAttribute
    public void setOpenCollapse(Model model) {
        model.addAttribute("openCollapse", "statisticSubmenu");
    }

    @GetMapping("/statistic/status")
    public String statisticStatus() {
        return "/statistic/status";
    }

    @GetMapping("/statistic/company/status")
    public String statisticCompanyStatus() {
        return "/statistic/companyStatus";
    }
}