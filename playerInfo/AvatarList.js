const avatar_path = "../assets/avatars/";

var nbAvatar = 8

var avatarList = [
    {
        id: 0,
        image : require(avatar_path + "avatar_blobx200.png")
    },
    {
        id: 1,
        image : require(avatar_path + "avatar_boucx200.png")
    },
    {
        id: 2,
        image : require(avatar_path + "avatar_crabex200.png")
    },
    {
        id: 3,
        image : require(avatar_path + "avatar_cerveaux200.png")
    },
    {
        id: 4,
        image : require(avatar_path + "avatar_corailx200.png")
    },
    {
        id: 5,
        image : require(avatar_path + "avatar_demonx200.png")
    },
    {
        id: 6,
        image : require(avatar_path + "avatar_oursx200.png")
    },
    {
        id: 7,
        image : require(avatar_path + "avatar_slimex200.png")
    },
]

export default {avatarList, nbAvatar}
