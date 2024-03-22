const fs = require("fs");
const chai = await import("chai");
const ejs = require("ejs");

// Load the EJS template file
const indexPath = "index.ejs";
const indexContent = fs.readFileSync(indexPath, "utf8");

describe("EJS index", () => {
  it("should render the correct HTML", () => {
    // Data to be passed to the template
    const data = {
      title: "Simple Application",
    };

    // Render the template with the data
    const renderedHtml = ejs.render(indexContent, data);

    // Expected HTML output based on the data
    const expectedHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <title><%= title %></title>
          </head>
          <body>
            <h1><%= title %></h1>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
              <li>add more...</li>
            </ul>
          </body>
        </html>
        `;

    // Assert that the rendered HTML matches the expected HTML
    expect(renderedHtml).to.equal(expectedHtml);
  });
});
