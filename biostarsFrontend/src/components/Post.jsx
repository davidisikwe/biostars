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

const Tags = ({ tag }) => {
  return (
    <div
      className='bg-[#ECECEC] text-[14px] text-[#6B3E4A] leading-none rounded-[2px] px-1 py-[1px] mr-[5px] inline-block border-b border-r border-[#bbbbbb] hover:bg-[#FBFDEF] hover:text-[#1E70BF]'
      style={{ height: '22.8px', lineHeight: '20.8px' }}
    >
      {tag}
    </div>
  );
};

const Post = ({ postTitle, author, updatedBy }) => {
  return (
    <div className='w-[802.15px] py-[7px] border-b border-[#ececec] flex'>
      <div className='flex pr-[10px] pb-[8px] gap-[2px]'>
        <Vote name={'votes'} metric={3} />
        <Reply name={'reply'} metric={1} />
        <Views name={'views'} metric={30} />
      </div>

      <div className='w-full flex flex-col'>
        <a className='text-[16px] text-[#4183C4] font-semibold'>{postTitle}</a>

        <div className='flex justify-between mt-2 flex-wrap'>
          <div className='flex flex-wrap gap-1'>
            <Tags tag={'Bioinformatics'} />
            <Tags tag={'BUSCO'} />
            <Tags tag={'Digital twin'} />
            <Tags tag={'Research'} />
            <Tags tag={'TF'} />
            <Tags tag={'Theory'} />
            <Tags tag={'Theory'} />
            <Tags tag={'Theory'} />
            <Tags tag={'Theory'} /> <Tags tag={'Theory'} />
          </div>
          <span className='text-[14px] flex-shrink-0 w-full text-right'>
            Updated 22 hours ago by{' '}
            <a className='text-[#4183C4] text-[14px]'>{updatedBy}</a> • written
            20 days ago by{' '}
            <a className='text-[#4183C4] text-[14px]'>{author}</a> • 0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
