import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  image: {
      type: String,
      required: true
  },
  content: {
      type: String,
      required: true
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true
  },
  tags: [String],
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const commentSchema = new mongoose.Schema({
  content: {
      type: String,
      required: true
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true
  },
  blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const replySchema = new mongoose.Schema({
  content: {
      type: String,
      required: true
  },
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true
  },
  comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const upvoteSchema = new mongoose.Schema({
  blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
      required: true
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserProfile',
      required: true
  },
  vote: {
      type: Number,
      required: true,
      default: 1
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const userProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        required: true
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }],
    upvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Upvote'
    }],
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    userImage: {
        type: String
    }
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
const Comments = mongoose.models.Comments || mongoose.model("Comments", commentSchema);
const Reply = mongoose.models.Reply || mongoose.model("Reply", replySchema);
const Upvote = mongoose.models.Upvote || mongoose.model("Upvote", upvoteSchema);
const UserProfile = mongoose.models.UserProfile || mongoose.model("UserProfile", userProfileSchema);

module.exports = { Blog, Comments, Reply, Upvote, UserProfile }
