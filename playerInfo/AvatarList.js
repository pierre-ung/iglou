const avatar_path = "../assets/avatars/";

var nbAvatar = 3

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
    }
]

export default {avatarList, nbAvatar}