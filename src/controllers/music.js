

export const postSong = async (req, res) => {
    console.log(req.body)
    console.log(req.files.music)
    res.send(req.files.music)
}