import { type FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './JavaScriptTopicPage.module.css';

export const JavaScriptTopicPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topicData, topicTitle } = location.state;

  const handleBack = () => {
    navigate(-1);
  };

  return <div>JavaScriptTopicPage</div>;
};
