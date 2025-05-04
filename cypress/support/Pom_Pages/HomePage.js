

class HomePage
{
	CSS_Locators =
	{
		
	}
	Url_Verification()
	{
		cy.clearAllCookies();
		cy.clearLocalStorage();
		cy.visit(Cypress.env('baseUrl'));
		cy.url().should('include', '/seleniumPractise');
		cy.title().should('eq', 'GreenKart - veg and fruits kart')
		cy.get("div[class='brand greenLogo']").as('BrandLogo').contains("GREEN")
		cy.get("@BrandLogo").then((LogoTxt)=>{
			
			const LogoText = LogoTxt.text()
			cy.log(LogoText);
		})
	}
	TotalProducts()
	{
		cy.get("div[class='products']").find('.product').should('have.length',30)
		cy.get("div[class='product-action']>button").should("have.length",30).contains("ADD TO CART")
		
	}
	LimitedOfferLink()
	{
		cy.get("div[class='cart']>a:first-child").as('HeaderLink').should("be.visible")
		cy.get("@HeaderLink").contains("Limited offer - FREE Core Java & QA Resume course");
		
		cy.get("@HeaderLink").invoke("removeAttr",'target').click()
		cy.wait(2000)
		cy.url().should('eq', "https://rahulshettyacademy.com/")

	}
	TopDealLink()
	{
		
        cy.get("div[class='cart']").find('a').each(($ele)=>{
	    cy.log($ele.text())

	    if($ele.text()=="Top Deals")
	     {
		cy.wrap($ele).invoke("removeAttr", 'target').click()
		cy.url().should("eq", "https://rahulshettyacademy.com/seleniumPractise/#/offers")
	     }
	})
   }

   FlightBookingLink()
	{
		cy.on("uncaught:exception", (err,Runnable)=>{
			return false;
		})
		
        cy.get("div[class='cart']").find('a').each(($ele)=>{
	    cy.log($ele.text())

	    if($ele.text()=="Flight Booking")
	     {
		cy.wrap($ele).invoke("removeAttr", 'target').click()
		cy.url().should("eq", "https://rahulshettyacademy.com/dropdownsPractise/")
	     }
	})
   }

	Cart_Verification()
	{
		cy.get(".cart-info>table>tbody>tr:nth-child(1)>td:nth-child(1)",{timeout:4000}).contains('Items');
		cy.get(".cart-info>table>tbody>tr:nth-child(1)>td:nth-child(3)").contains(0).then(($products)=>{
			let qty = $products.text();
			cy.log("Added Products in cart are : " +qty);
		})
		
	}
	Footer()
	{
		cy.get('footer').scrollIntoView().contains('© 2019 ')
	}
	SearchBox()
	{
		
		
	}
	Verify_SelectedProducts()
	{
		
		
	}
	Cart_AfterAddProducts()
	{
		
		
	}
	
}export default HomePage;