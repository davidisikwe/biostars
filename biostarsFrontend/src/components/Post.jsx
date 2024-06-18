import React from 'react';

const Vote = ({ name, metric }) => {
  return (
    <div className='w-[49.5px] h-[41px] bg-[#E8E8E8] flex flex-col items-center justify-center p-1 rounded-[1px]'>
      <div className='text-[16.2px] text-[#000000DE] font-extrabold leading-none'>
        {metric}
      </div>
      <div className='text-[12px] text-[#000000DE] font-medium leading-none'>
        {name}
      </div>
    </div>
  );
};

const Reply = ({ name, metric }) => {
  return (
    <div className='w-[49.5px] h-[41px] bg-[#8F2C47] flex flex-col items-center justify-center p-1 rounded-[1px]'>
      <div className='text-[16.2px] text-[#FFFFFF] font-extrabold leading-none'>
        {metric}
      </div>
      <div className='text-[12px] text-[#FFFFFF] font-medium leading-none'>
        {name}
      </div>
    </div>
  );
};

const Views = ({ name, metric }) => {
  return (
    <div className='w-[49.5px] h-[41px] bg-[#FFFFFF] flex flex-col items-center justify-center p-1 rounded-[1px]'>
      <div className='text-[16.2px] text-[#000000DE] font-extrabold leading-none'>
        {metric}
      </div>
      <div className='text-[12px] text-[#000000DE] font-medium leading-none'>
        {name}
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className='w-[]'>
      <div className='flex pr-[10px] pb-[8px] gap-[2px]'>
        <Vote name={'votes'} metric={3} />
        <Reply name={'reply'} metric={1} />
        <Views name={'views'} metric={30} />
      </div>
    </div>
  );
};

export default Post;
