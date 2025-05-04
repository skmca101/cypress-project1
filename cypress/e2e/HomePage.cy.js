///<reference types = "cypress"/>
import HomePage from "../support/Pom_Pages/HomePage";

describe("Check and Verify HomePage Functionality", ()=>{
	const pomEle = new HomePage();
	beforeEach('Verify the URL, Title,BrandLogo is present as expected',()=>{
		pomEle.Url_Verification();

	})

	it("Check and verify How much products are availevel on home page",()=>{
		pomEle.TotalProducts();
		
	})
	it("Check and verify Limited Offer Link",()=>{
		pomEle.LimitedOfferLink();
		
	})
	it("Check and verify Top Deals Link",()=>{
		pomEle.TopDealLink();
		
	})
	it("Check and verify Flight Booking Link",()=>{
		pomEle.FlightBookingLink();
		
	})

	it("Check and verify the prseent Items and Price Tag are 0 quantity",()=>{
		pomEle.Cart_Verification()
	})
	it("check and verify the footer and its Text",()=>{
		pomEle.Footer();
		
	})
	it("check and verify the search option in top header page",()=>{
		
	})
	it("select any product and verify the price, text, qty present and check functionality",()=>{
		
	})
	it("Add any 3 products in cart and verify that counting of cart have changed",()=>{
		
	})
	
})
