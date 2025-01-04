const Router = require("express").Router;

const router = new Router();

const mockData = [
  {
    "title": "News 1",
    "message": "Welcome to the news 1!",
    "author": "Deff Ostin",
  },{
    "title": "News 2",
    "message": "Welcome to the news 2!",
    "author": "Kyle Bro",
  }
]

function getStandardResponse(status,message,data){
  return {
    status: status,
    message : message,
    data : data
  }
}

router.get("/news", async (req, res) => {
  res.json(getStandardResponse(200, 'News successful fetched', mockData));
})

module.exports = router;
