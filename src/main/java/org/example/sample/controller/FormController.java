package org.example.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class FormController {

    @ModelAttribute
    public void setOpenCollapse(Model model) {
        model.addAttribute("openCollapse", "formSubmenu");
    }

    @GetMapping("/form/element")
    public String formElements() {
        return "/form/element";
    }

    @GetMapping("/form/button")
    public String formsFormButton() {
        return "/form/button";
    }

    @GetMapping("/form/layout")
    public String formsFormLayout() {
        return "/form/layout";
    }
}