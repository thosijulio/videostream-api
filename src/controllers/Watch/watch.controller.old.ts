import { Request, Response } from 'express';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';

ffmpeg.setFfmpegPath(ffmpegPath || '');

const watch = async (req: Request, res: Response) => {
  const _videoName = req.params.videoName;
  const _videoPath = path.join(__dirname, '..', '..', 'videos', 'videoName');

  const command = ffmpeg('movies/(1977) Star Wars/teste_mkv.mkv')
    .format('mp4')
    .videoCodec('libx264')
    .outputOptions('-preset ultrafast')
    .outputOptions('-movflags frag_keyframe+empty_moov')
    .outputOptions('-profile:v baseline')
    .outputOptions('-level 3.0')
    .outputOptions('-pix_fmt yuv420p')
    .outputOptions('-vf scale=1920:1080')
    .output(`movies/(1977) Star Wars/novoteste.mp4`)
    .on('end', () => {
      const videoStream = fs.createReadStream(`movies/(1977) Star Wars/novoteste.mp4`);
      videoStream.pipe(res);
    })
    .on('error', (err) => {
      console.error('Error transcoding video:', err);
      res.status(500).send('Error transcoding video');
    });

  command.run();
};

export default watch;
