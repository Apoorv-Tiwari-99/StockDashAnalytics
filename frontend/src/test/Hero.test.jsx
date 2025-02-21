import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom"; // to delay testing by some seconds 
import Hero from "../landing_page/home/Hero";

// Test Suite (to give multiple testcases for a component )

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","/media/images/homeHero.png");

    });

    test("renders signup button",()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole("button",{name:"Signup Now"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary"); 

    });
});
 