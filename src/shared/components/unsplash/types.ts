/**
 * @description auto generated types for unsplash response
 */
export declare module Unsplash {

  export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }

  export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }

  export interface BusinessWork {
    status: string;
    approved_on: Date;
  }

  export interface Wallpapers {
    status: string;
    approved_on: Date;
  }

  export interface Interiors {
    status: string;
    approved_on: Date;
  }

  export interface Covid19 {
    status: string;
    approved_on: Date;
  }

  export interface TopicSubmissions {
    ['business - work']: BusinessWork;
    wallpapers: Wallpapers;
    interiors: Interiors;
    ['covid - 19']: Covid19;
  }

  export interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  }

  export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
  }

  export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
  }

  export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links2;
    profile_image: ProfileImage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
  }

  export interface Type {
    slug: string;
    pretty_slug: string;
  }

  export interface Category {
    slug: string;
    pretty_slug: string;
  }

  export interface Subcategory {
    slug: string;
    pretty_slug: string;
  }

  export interface Ancestry {
    type: Type;
    category: Category;
    subcategory: Subcategory;
  }

  export interface Urls2 {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }

  export interface Links3 {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }

  export interface TexturesPatterns {
    status: string;
    approved_on: Date;
  }

  export interface TopicSubmissions2 {
    ['textures - patterns']: TexturesPatterns;
  }

  export interface Links4 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  }

  export interface ProfileImage2 {
    small: string;
    medium: string;
    large: string;
  }

  export interface Social2 {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
  }

  export interface User2 {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: Links4;
    profile_image: ProfileImage2;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social2;
  }

  export interface CoverPhoto {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: Urls2;
    links: Links3;
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: TopicSubmissions2;
    user: User2;
  }

  export interface Source {
    ancestry: Ancestry;
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: CoverPhoto;
  }

  export interface Tag {
    type: string;
    title: string;
    source: Source;
  }

  export interface Result {
    id: string;
    created_at: Date;
    updated_at: Date;
    promoted_at?: Date;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    urls: Urls;
    links: Links;
    categories: any[];
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: any;
    topic_submissions: TopicSubmissions;
    user: User;
    tags: Tag[];
  }

  export interface RootObject {
    total: number;
    total_pages: number;
    results: Result[];
  }

}
