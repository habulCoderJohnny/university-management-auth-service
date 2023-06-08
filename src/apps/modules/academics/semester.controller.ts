import { RequestHandler } from 'express';
import { SemesterService } from './semester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await SemesterService.createSemester(academicSemesterData);
    res.status(200).json({
      success: true,
      message: '✅ Academic Semester data created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const semesterController = {
  createSemester,
};
