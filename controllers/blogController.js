const blogController = {
    createBlog: (req, res) => {
        res.status(200).json({ message: "Blog created successfully" });
    },
    readBlog: (req, res) => {
        res.status(200).json({ message: "Blog read successfully" });
    },
    updateBlog: (req, res) => {
        res.status(200).json({ message: "Blog update successfully" });
    },
    deleteBlog: (req, res) => {
        res.status(200).json({ message: "Blog delete successfully" });
    }
};

module.exports = blogController;