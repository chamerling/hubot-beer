// Description:
//  Watch messages for 🍺 and send back a 🍺 gif
//
// Author:
//   Christophe Hamerling
module.exports = (robot) => {

  robot.hear(/beer/i, res => {
    robot
      .http('http://api.giphy.com/v1/gifs/translate?s=beer&api_key=dc6zaTOxFJmzC')
      .header('Accept', 'application/json')
      .get()((err, response, body) => {
        if (err) {
          return console.log('Error while getting 🍻', err);
        }

        if (body) {
          const json = JSON.parse(body);
          res.send(`Beers!!!! ${json.data.images.fixed_height.url}`);
        }
      });
    });
};
