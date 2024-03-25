import { observer } from 'mobx-react-lite';
import { Header } from 'modules/ui/components/Header/Header';
import { FlexColumn, FlexRow } from 'modules/ui/Flex';
import jobsStore from 'modules/store/jobsStore';
import { HintText, JobModal } from './styled';
import { Text, TEXT_TYPES } from 'modules/ui/Text';
import { Buttton } from 'modules/ui/Button';
import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StyledList } from '../Me/styled';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaRegHandPointer } from 'react-icons/fa';
import { useRouterSwithcer } from 'modules/hooks/useRouterSwithcer';
import { isMobile } from 'react-device-detect';

export const MyJobs = observer(() => {
  useRouterSwithcer();
  const { currentJob, setCurrentJob, jobs } = jobsStore;

  useEffect(() => {
    isMobile && setCurrentJob(jobs[0]);
  }, []);

  const onBack = useCallback(
    () => setCurrentJob(jobs[currentJob!.id - 1] || jobs[jobs.length - 1]),
    [currentJob, jobs, setCurrentJob]
  );

  const onNext = useCallback(
    () => setCurrentJob(jobs[currentJob!.id + 1] || jobs[0]),
    [currentJob, jobs, setCurrentJob]
  );

  const onClose = useCallback(() => setCurrentJob(null), [setCurrentJob]);

  const jobModal = (
    <JobModal
      w="70%"
      justifyContent="center"
      gap="10px"
      as={motion.div}
      animate={{
        y: [600, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 1 }}>
      <FlexRow className="wrapper" w="100%">
        <FlexColumn className="article" w="60%" gap="10px">
          <FlexRow w="100%" alignItems="center" justifyContent="space-between">
            <Text type={TEXT_TYPES.title}>
              {currentJob?.name} {currentJob?.duration}
            </Text>
            <Buttton onClick={() => window.open(currentJob?.link)}>
              Visit
              <FaRegHandPointer className="icon" size={25} />
            </Buttton>
          </FlexRow>
          <Text className="text" type={TEXT_TYPES.text}>
            Description: {currentJob?.description}
          </Text>
          <Text className="text" type={TEXT_TYPES.text}>
            Position: {currentJob?.position}
          </Text>
          {currentJob?.responsibilities && (
            <>
              <Text className="text">Responsibilities:</Text>
              <StyledList>
                {currentJob.responsibilities.map((text) => (
                  <li>
                    <Text className="text">{text}</Text>
                  </li>
                ))}
              </StyledList>
            </>
          )}
        </FlexColumn>
        <FlexColumn
          className="image-wrapper"
          w="35%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          p="20px">
          <img src={currentJob?.logo} alt={currentJob?.name} width={300} />
        </FlexColumn>
      </FlexRow>
      <FlexRow
        className="buttons-wrapper"
        w="100%"
        flexWrap="wrap"
        alignSelf="flex-end"
        justifyContent="space-between"
        alignItems="center">
        <Buttton onClick={onClose}>
          Close
          <AiOutlineCloseCircle className="icon" size={25} />
        </Buttton>
        <FlexRow flexWrap="wrap">
          <Buttton onClick={onBack}>
            <IoIosArrowRoundBack className="icon" size={25} /> To prev job
          </Buttton>
          <Buttton onClick={onNext}>
            To next job
            <IoIosArrowRoundForward className="icon" size={25} />
          </Buttton>
        </FlexRow>
      </FlexRow>
    </JobModal>
  );

  return (
    <FlexColumn w="100%" h="100%" alignItems="center">
      <Header />
      {currentJob ? (
        jobModal
      ) : (
        <FlexRow
          as={motion.div}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}>
          <HintText>{`[hint]:`} Click on the circles</HintText>
        </FlexRow>
      )}
    </FlexColumn>
  );
});
