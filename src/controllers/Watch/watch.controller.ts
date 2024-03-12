import { Request, Response } from 'express';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises';

ffmpeg.setFfmpegPath(ffmpegPath || '');

const watch = async (req: Request, res: Response) => {
  try {
    const _videoName = req.params.videoName;
    const _videoPath = path.join(__dirname, '..', '..', 'videos', 'videoName');

    await fsPromises.access('movies/(1977) Star Wars/teste_mkv.mkv', fsPromises.constants.F_OK);

    const videoStream = fs.createReadStream('movies/(1977) Star Wars/teste_mkv.mkv');
    videoStream.pipe(res);
  } catch (err) {
    console.error('Error transcoding video:', err);
    res.status(500).send('Error transcoding video');
  }
};

export default watch;
