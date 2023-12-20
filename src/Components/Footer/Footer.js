import React from 'react';

//icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className='text-center p-1'>
      <small className='d-block'>
        &copy; KKR 2023 -{' '}
        <span id='edamam-badge' data-color='transparent'></span>
        {/* shout out to edaman for the api! */}
      </small>
      <a
        href=''
        target=' _blank'
      >
        <FaLinkedin />
      </a>
      <a href='' target=' _blank'>
        <FaGithub />
      </a>
      <a href='' target=' _blank'>
        <FaTwitter />
      </a>
      <a href=''>
        <FiMail />
      </a>
    </footer>
  );
}
