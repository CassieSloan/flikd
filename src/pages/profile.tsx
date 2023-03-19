import { FC, useEffect } from 'react';
import { Navigation } from '../components/common/Navigation';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';

type ProfileProps = {
  profileId: string;
};

/**
 * Render Profile component.
 */
const Profile: FC<ProfileProps> = () => {
  useEffect(() => {
    //query parse
  }, []);

  return (
    <PageLayout>
      <Section>
        <Navigation />
        <h1>This is a profile page</h1>
      </Section>
    </PageLayout>
  );
};
export default Profile;
