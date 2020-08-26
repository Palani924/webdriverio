describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const elem = $('.projectLogo').$$( "img" )[0]
        console.log("The Image is" + elem.getAttribute("src"))
        expect(elem).
        expect(elem).toHaveAttribute('src','https://webdriver.io/img/webdriverio.png');

    })
})

