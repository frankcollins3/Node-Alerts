    puppeteer: {
      type: new GraphQLList(GraphQLString),    
      description: 'Invoke Puppeteer',
      resolve: async () => {

          let promises = [
            puppeteer.launch({headless: false}).then(async(browser) => {            
              let promises = [
                puppeteer.launch({headless: false}).then(async (browser) => {
                  const page = await browser.newPage();
                  await page.goto('file:///Users/medium/Desktop/alert.html');
              
                  // Write HTML code to the #writing-board element
                  // await page.evaluate(() => {
                  //   const writingBoard = document.querySelector('#writing-board');
                  //   writingBoard.innerHTML = '<h1>Here is my alert</h1>';
                  // });
                  return await page.evaluate( () => {
                    // const tree = document.valuetree;
                    const tree = window.valuetree
                    tree.branch_3 = 'alert sent from node'
                    return ['wow', 'not', 'again']
                    // return [tree.branch_1, tree.branch_2, tree.branch_3]
                  })
              
                  // await browser.close();
                })
              ];
              return Promise.all(promises);          
              // await Promise.all(promises);          
            })
          ]      
        // return ['hey', 'nice', 'one'];
      }
    },
