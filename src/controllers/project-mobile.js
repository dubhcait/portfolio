const { getMoreData } = require("../model/queries/getData");

exports.get = (req, res) => {
  getMoreData().then(response => {
    const children = response.map(element => {
      return {
        name: element["row_to_json"]["f2"],
        size: 4703,
        children: [
          {
            name: "website",
            type: "url",
            size: 1703,
            url: element["row_to_json"]["f3"]
          },
          {
            name: "Github",
            type: "url",
            size: 1703,
            url: element["row_to_json"]["f4"]
          },
          {
            name: `Software used: ${element["row_to_json"]["f6"]} `,
            size: 1703
          }
        ]
      };
    });

    const dataToSend = { children: children, name: "projects", size: 9703 };

    res.send(dataToSend);
  });
};
