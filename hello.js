(async () => {
    const chalk = (await import("chalk")).default;

    console.log(chalk.green("Hello, Node.js!"));
    console.log(chalk.blue("Vajeeh"));
    console.log(chalk.yellow("Day 11"));
})();