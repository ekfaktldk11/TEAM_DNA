import PostList from '../models/PostList';
import Post from '../models/post';
// let?
export const POSTLIST = [
    new PostList('p1', 'Have you watched Naruto before?', 'Jap', 'Eng'),
    new PostList('p2', 'OMG Korean Animation Black GoMuShin is so exited!!','Kor','Eng'),
    new PostList('p3', "BTS's DNA  lyrics... can't understand at all !!", 'Kor', 'Eng')
];

export const POSTS = [
    new Post(
        'p1',
        'Have you watched Naruto before?',
        'Jap',
        'Eng',
        'naruto_ep323.txt',
        true,
        true
    ),
    new Post(
        'p2',
        'OMG Korean Animation Black GoMuShin is so exited!!',
        'Kor',
        'Eng',
        'Black_GoMushin_ep03.txt',
        true,
        true
    ),
    new Post(
        'p3',
        "BTS's DNA  lyrics... can't understand at all !!",
        'Kor',
        'Eng',
        'DNA_lyrics.txt',
        true,
        true
    )
];

export let SELECTEDLIST = [

];