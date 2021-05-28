# backstopJS

<a href='https://github.com/garris/BackstopJS'>Official Detailed Documentation</a>  <br>
<a href='https://www.adcisolutions.com/knowledge/visual-regression-testing-backstopjs'>Quick guide</a> <br>

 BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time. <br>
 And here's a quick basic guide how it works and how we can use it in our workflows. <br>

## How it works:
- BackstopJS takes 2 inputs, can be images or urls, that are compared based on user defined Criteria. 
- you can also run the same tests in Docker, avoding this way any dependencies issues
- the final restult (after 2 images/sites were compared) will look something like this. And there is also an option to adjust the Match Threshold
![image](https://user-images.githubusercontent.com/52494172/119988865-3566d800-bfcf-11eb-877c-b90a7affce37.png)

 
 
## How we can use it:
- we can try to experiment with it over time
- first thing where we can apply it, are Otter releases, because most of the Gutenberg demos from demosites.io are Otter dependent.
 Basically have a Snapshot of how a reference demo should look, and before each release compare that with the new version. This way we can avoid issues like <a href='https://github.com/Codeinwp/gutenberg-blocks/issues/401#issuecomment-669748772'>this one</a>, <a href='https://github.com/Codeinwp/neve/issues/2849#issuecomment-841178358'>another one</a>, or basic things like icon/images missing/not loading.

