# s3-media-viewer

A lightweight, client-side media gallery for browsing images, videos, and files stored in AWS S3. Enter your bucket name and browse. Supports folder navigation, create folders, upload files, video playback, multi-select, download, copy to clipboard, and delete.

## Features

- Browse any S3 bucket by name
- Images, videos (mp4, webm, mov, etc.), and other files
- Video playback in lightbox
- Create folders and upload files
- Folder navigation within each bucket
- Drag or tap to select multiple photos
- Download (single or as ZIP), copy to clipboard, delete
- Lightbox view with keyboard navigation
- Grid size and sort options
- Turkish / English language toggle
- Mobile-friendly UI

## Live Demo

Try it: [http://memo-photos3.s3-website.eu-central-1.amazonaws.com/](http://memo-photos3.s3-website.eu-central-1.amazonaws.com/)

Enter your AWS credentials and bucket name to browse your own S3 storage.

## AWS Setup

Create an IAM user with programmatic access and attach a policy that grants access to your S3 buckets. Note: ListBuckets cannot be called from the browser (AWS CORS limitation), so you enter the bucket name manually.

### Required IAM Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::*/*"
    }
  ]
}
```

This grants access to all buckets in your account. To restrict to specific buckets, replace `arn:aws:s3:::*` with `arn:aws:s3:::bucket-name` and `arn:aws:s3:::*/*` with `arn:aws:s3:::bucket-name/*` for each bucket.

### CORS Configuration

Enable CORS on each S3 bucket you want to browse so the browser can make requests:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD", "PUT", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": ["ETag", "Content-Length"]
  }
]
```

### Create the User

1. Go to IAM → Users → Create user
2. Enable "Programmatic access"
3. Attach the policy above (create a custom policy or use inline)
4. Save the **Access Key ID** and **Secret Access Key** — you'll enter these in the app

## Usage

1. Open `index.html` in a browser (or serve via HTTP/HTTPS)
2. Enter your AWS Access Key, Secret Key, and Region
3. Enter your bucket name and click Go
4. Browse your photos — credentials and last bucket are stored in `localStorage`

## Development

Run locally (required for AWS API calls — `file://` won't work):

```bash
npx serve
```

or

```bash
python3 -m http.server 8000
```

Then open `http://localhost:3000` (serve) or `http://localhost:8000` (python).

**Tech:** Vanilla JavaScript (AWS SDK, JSZip). No build step.
