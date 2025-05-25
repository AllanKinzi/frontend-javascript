interface MajorCredits {
    credits: number;
    __brandMajor: 'major'; 
  }
  
  interface MinorCredits {
    credits: number;
    __brandMinor: 'minor'; 
  }

  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brandMajor: 'major',
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brandMinor: 'minor',
    };
  }