import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"img.youtube.com",
        port:"",
        pathname:"/**"
      },
       {
        protocol:"https",
        hostname:"upload.wikimedia.org",
        port:"",
        pathname:"/**"
      },
      {
        protocol:"https",
        hostname:"i.pinimg.com",
        port:"",
        pathname:"/**"
      },
      {
        protocol:"https",
        hostname:"svgrepo.com",
        port:"",
        pathname:"/**"
      }
    ]
  }
};

export default nextConfig;
