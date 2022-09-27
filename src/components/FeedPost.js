import {
    AntDesign, Entypo, FontAwesome5,
    MaterialCommunityIcons
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { S3Image } from 'aws-amplify-react-native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LikeImage from "../../assets/images/like.png";

const FeedPost = ({ post }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.post}>
            <Pressable onPress={() => navigation.navigate("Profile", { id: post.postUserId })} style={styles.header}>
                {post.User?.image ? <S3Image imgKey={post.User?.image} style={styles.profileImage} /> : <Image source={{ uri: post.User?.image }} style={styles.profileImage} />}

                <View>
                    <Text style={styles.name}>{post.User?.name}</Text>
                    <Text style={styles.subtitle}>{post.createdAt}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={18} color="gray" style={styles.icon} />
            </Pressable>
            <View style={styles.body}>
                {post.description && <Text style={styles.description}>{post.description}</Text>}
                {post.image && (<S3Image imgKey={post.image} style={styles.image} />)}
            </View>
            <View style={styles.footer}>
                <View style={styles.statsRow}>
                    <Image source={LikeImage} style={styles.likeIcon} />
                    <Text style={styles.likeBy}>
                        Elon Musk and {post.numberOfLikes} others
                    </Text>
                    <Text style={styles.shares}>
                        {post.numberOfShares} shares
                    </Text>
                </View>
                <View style={styles.buttonsRow}>

                    {/* Like button */}
                    <View style={styles.iconButton}>
                        <AntDesign name="like2" size={18} color="gray" />
                        <Text style={styles.iconButtonText}>Like</Text>
                    </View>

                    {/* Comment button */}
                    <View style={styles.iconButton}>
                        <FontAwesome5 name="comment-alt" size={16} color="gray" />
                        <Text style={styles.iconButtonText}>Comment</Text>
                    </View>

                    {/* Share button */}
                    <View style={styles.iconButton}>
                        <MaterialCommunityIcons
                            name="share-outline"
                            size={18}
                            color="gray"
                        />
                        <Text style={styles.iconButtonText}>Share</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FeedPost

const styles = StyleSheet.create({
    post: {
        width: "100%",
        marginVertical: 10,
        backgroundColor: "#fff"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: "500",
    },
    subtitle: {
        color: "gray"
    },
    icon: {
        marginLeft: "auto"
    },
    description: {
        paddingHorizontal: 10,
        lineHeight: 20,
        letterSpacing: 0.3,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        marginTop: 10,
    },
    footer: {
        paddingHorizontal: 10,
    },
    statsRow: {
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray"
    },
    likeIcon: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    likeBy: {
        color: "gray"
    },
    shares: {
        marginLeft: "auto",
        color: "gray"
    },
    buttonsRow: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    iconButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButtonText: {
        color: "gray",
        marginLeft: 5,
        fontWeight: "500",
    },
})