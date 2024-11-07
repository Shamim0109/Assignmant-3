const homeController = {
    home: (req, res) => {
        res.status(200).json({ message: "Welcome" });
    }
};

module.exports = homeController;