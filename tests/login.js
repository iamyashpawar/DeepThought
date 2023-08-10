 import {Selector,t} from 'testcafe';
 
 fixture("Login Page ")
    .page("https://beta.deepthought.education/login");

    test('Sucessful Login', async (t) => {
        await t
        .typeText(Selector('#username'), 'pawaryash97@gmail.com')
        .typeText(Selector('#password'), 'yash@123')
        .click(Selector('#remember'))
        .click(Selector('#login'))
        await t .expect(Selector('H5').withExactText('Welcome to DeepThought').exists).ok();
        
    });

    test('Login with invalid creditals' ,async  (t) => {

        const errorMessage = Selector('strong')
        await t
        .typeText(Selector('#username'), 'imyashpawar@gmail.com')
        .typeText(Selector('#password'), 'abc@123')
        .click(Selector('#remember'))
        .click(Selector('#login'))
        const isErrorMessageVisible = await errorMessage.exists;
       if(isErrorMessageVisible){
        console.log('Login with invalid creditails');
       }else{
        console.log('Login with valid creditails');
       }
       await t.expect(errorMessage.exists).ok();
        
    });

    