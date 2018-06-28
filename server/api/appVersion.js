import Express from 'express'
const router = Express.Router();
const format = ({
    resCode = 0,
    msg = 'success',
    data = {}
}) => {
    return {
        resCode,
        msg,
        data
    }
}
//添加版本
router.get('/addVersion', function (req, res) {
    res.send(format({
        data: 'success'
    }))
});

module.exports = router;