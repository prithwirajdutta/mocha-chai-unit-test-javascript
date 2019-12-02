<!DOCTYPE html>
<html>
<head>
<link href="https://cdnjs.cloudflare.com/ajax/libs/mocha/6.2.1/mocha.min.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/6.2.1/mocha.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js"></script>
<title>Page Title</title>
</head>
<body>

<div id="mocha"></div>

</body>
<script>
const reverse = string =>
    string
        .split("")
        .reverse()
        .join("");

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
    it("Should reverse string", () => {
        assert.equal(reverse("Hello World!"), "!dlroW olleH");
    });
});

mocha.run();
</script>
</html>
