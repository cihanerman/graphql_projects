const Query = {
    user: async (parent, args, { User }) => {
        return await User.findById(args.id)
    },
    users: async (parent, args, { User }) => {
        return await User.find({}).sort({ 'createAt': 'desc' })
    },
    snaps: async (parent, args, { Snap }) => {
        return await Snap.findById(args.id)
    },
    snaps: async (parent, args, { Snap }) => {
        return await Snap.find({}).sort({ 'createAt': 'desc' })
    }
}

module.exports = Query