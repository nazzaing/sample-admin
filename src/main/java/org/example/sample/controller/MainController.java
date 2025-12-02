package org.example.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home() {
        return "home";
    }
    
    @GetMapping("/e-commerce")
    public String eCommerce() {
        return "eCommerce";
    }
    
    @GetMapping("/forms/formElements")
    public String formElements() {
        return "forms/formElements";
    }

    @GetMapping("/forms/formButton")
    public String formsFormButton() {
        return "forms/formButton";
    }
    
    @GetMapping("/forms/formLayout")
    public String formsFormLayout() {
        return "forms/formLayout";
    }
}