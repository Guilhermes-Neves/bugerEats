import homePage from '../pages/HomePage'

describe('home page', ()=>{
    it('app should be online', ()=>{
        homePage.go()
        homePage.verifyPageLoad()
    })
})